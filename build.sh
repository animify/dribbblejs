#!/bin/bash
# Build dribbblejs

function BUNDLE {
    echo "Bundling..."
    rm -rf dist
    yarn bundle
    mv dist/index.d.ts index.d.ts
    echo "Bundling done."
}

BUNDLE
echo "Completed build process."
