from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in time_loss_test/__init__.py
from time_loss_test import __version__ as version

setup(
	name="time_loss_test",
	version=version,
	description="Time Loss",
	author="Bashar",
	author_email="Basharh@albertanewsprint.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
