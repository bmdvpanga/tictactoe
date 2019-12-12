from distutils.core import setup

setup(name='tic-back',
      version='1.0',
      packages=['tic-back'],
      install_requires=['flask', 'flask-cors'],
      entry_points={ "console_scripts": ["server_and_game_logic = tic-back.runner:main"]}
      )