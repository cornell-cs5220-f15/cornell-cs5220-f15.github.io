#!/bin/sh

for f in `find . -name "*.tikz"` ; do
  stem=`echo $f | sed -e 's/[/].*$//'`
  fname=`echo $f | sed -e 's/.*[/]//'`
  base=`echo $fname | sed -e 's/.tikz$//'`
  ./tikz2svg $f > ../img/$stem/$base.svg
done
