#! /bin/bash
cd /Users/rock/Documents/ROCK/WORKSPACE/weifenxiao/wenfenxiao/weifenxiao
./gradlew clean
./gradlew -Pmarket=config/market.txt clean apkmengmengBeta
cd /Users/rock/Documents/ROCK/WORKSPACE/weifenxiao/wenfenxiao/weifenxiao/build/archives
open .
echo "end"
