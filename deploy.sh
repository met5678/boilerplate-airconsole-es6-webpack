#!/bin/sh

aws s3 sync ./dist/ s3://airconsole-tester --profile personal --acl public-read