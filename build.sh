#!/bin/bash
# Build dribbblejs

function BUNDLE {
    echo "Bundling..."
    rm -rf dist
    yarn bundle
    echo "Bundling done."
}

BUNDLE
echo "Completed build process."
