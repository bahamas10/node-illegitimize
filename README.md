illegitimize
============

Take a filename and make it look like it was gathered through illegitimate means

Installation
------------

First, install [Node.js][0].  Then:

    npm install illegitimize

Install the command line utility with

    [sudo] npm install -g illegitimize

Usage
-----

### CLI

Say you have a movie in your current directory that you've obtained legally, but would like
it to look like you downloaded it illegally (to look cool for your peers).

```
$ ls
A Cool Movie - 2014 1080p.mkv
```

Run `illegitimize` to make the filename more suspicious

```
$ illegitimize 'A Cool Movie - 2014 1080p.mkv'
A Cool Movie - 2014 1080p.mkv -> ./A.COOL.MOVIE.-.2014.1080P.OP[!KGH!].Xvid.mkv
```

Now, when your friends see your file they will think you are really cool

```
$ ls
A.COOL.MOVIE.-.2014.1080P.OP[!KGH!].Xvid.mkv
```

### API

``` js
var illegitimize = require('illegitimize');

var s = '/home/dave/Some Cool Movie - 1080p 1984.mkv';
// => "/home/dave/Some Cool Movie - 1080p 1984.mkv"

illegitimize(s);
// => "/home/dave/SOME.COOL.MOVIE.-.1080P.1984.R34P4R.Xvid.mkv"
```

note that only the `path.basename` of the file is affected

License
-------

MIT License

[0]: http://nodejs.org
