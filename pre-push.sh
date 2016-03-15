#!/bin/bash

PATH=$PATH:/usr/local/bin:/usr/local/sbin

[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh # This loads NVM

nvm use 0.12;

npm test;
if [ $? -ne 0 ]; then
  echo "Failed TEST"
  exit 1
fi

# Check for the stupid OPTIONS + SPACE thing
(grep --include={*.js,*.less,*.html} --exclude=*node_modules* -rnw '.' -e " ");
if [ $? -eq 0 ]; then
  echo "Has stupid OPTIONS + SPACE hard space thing!"
  exit 1
fi
