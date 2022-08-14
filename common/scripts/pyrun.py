import argparse
import os
import pathlib
import runpy
import sys
import typing


def build_arg_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description='Entry point to run a python module or python script')
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument('--module', '-m', type=str, dest='module', help='run a python module')
    group.add_argument('--file', '-f', type=str, dest='file', help='run a python script')

    parser.add_argument('---',
                        nargs=argparse.REMAINDER,
                        required=True,
                        dest='passthrough_args',
                        help='arguments to be passed through to module or file')

    return parser


def pyrun(args: typing.List[str]) -> None:
    """
    main executable to run python scripts with correct sys.path
    """
    repo_root = pathlib.Path(__file__).absolute().parent.parent.parent.as_posix()
    sys.path.append(repo_root)
    arg_parser = build_arg_parser()
    namespace = arg_parser.parse_args(args)

    if namespace.module:
        runpy.run_module(mod_name=namespace.module, run_name='__main__')
    elif namespace.file:
        runpy.run_path(path_name=pathlib.Path(os.getcwd()).joinpath(namespace.file).resolve().as_posix(),
                       run_name='__main__')
    else:
        raise ValueError('use -f to indicate file runner, use -m to indicate module runner')


if __name__ == '__main__':
    pyrun(sys.argv)
