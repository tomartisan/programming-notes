# Configuration

:::tip TIP
In this article, you will get the configuration skills of Python's everything

All the tests were under macOS
:::

## PIP

When you wanna using `pip` for package management, you'd better make a proper configuration for both `global` and `user`.

Especially if you are preparing to use a virtual environment like `pyenv`.

```conf
[global]
break-system-packages = true
index-url =   https://pypi.org/simple
extra-index-url =  https://mirrors.aliyun.com/pypi/simple
disable-pip-version-check = true
timeout = 10000
upgrade = true
[install]
user = false
```

## Multiple version control

For multiple installed versions, such as `3.10.x`, `3.12.x`, or `2.7.x`, you may want to choose a default version.

Show how many versions you have installed and which one is default:

```bash
pyenv versions
```

**set for global and local**


```bash
pyenv global 3.12.8

# this will generate .python-version to your current folder
pyenv local 3.12.8
```


## Uninstall all pips

A **safer** and **simpler** way to remove all the packages

```bash
# make a backup first when you want to install again
pip freeze > requirements.txt

# remove one by one which needs you to confirm to remove
pip uninstall -r requirements.txt

# remove all at once, this would be dangerous!!!
pip uninstall -r requirements.txt -y
```


