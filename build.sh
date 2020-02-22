#!/bin/bash
# Build dribbblejs

function BUNDLE {
    echo "Bundling..."
    rm -rf dist
    yarn bundle
    rm -rf dist/__tests__
    echo "Bundling done."
}

BUNDLE
echo "Completed build process."
