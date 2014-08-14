# Transparent  

A boilerplate for kicking off a kick-ass Bootstrap design with Ghost.  


Installation  
---------------  
Install as any other Ghost theme.  
1. Put it to content/themes/ folder  
2. Go to www.youradress.com/ghost/settings/general/  
3. You might have to restart your Ghost.  
4. Select Invisible from Theme section.  
5. Save.  
The theme should start and say "Hello yes, this is Ghost" for a couple of seconds.
It should report missing bootstrap.


Starting theme development  
---------------  
(Assuming you have bower installed)  
Go to content/themes/transparent  
```
bower install  
```
This will download Bootstrap.  


Features  
-----------  
Bower - http://bower.io/  
Boostrap - http://getbootstrap.com/  
jQuery - is included to Ghost by default, but Bower installs this together with Bootstrap  


Tutorial  
--------  
default.hbs - Main template. This is where your <html><head><body> are.  
  index.hbs - also known as front page. Get's included to default.hbs  
    partials/loop.hbs - aka "loop all the posts"  
  page.hbs - aka "static page"  
  post.hbs - aga "single post"  

If you also need to show the author and tag pages, then get these from Casper:  
tag.hbs - aka "list by tag"  
author.hbs - aka "list by author"  


Magic words / Cheat sheet  
--------------  
There are chat sheets with available tags inside:  
default.hbs  
index.hbs  
page.hbs  
post.hbs  
partials/loop.hbs  


CSS / JS / Fonts  
-----------------  
They are all in the "assets" folder. To call them use:  
{{asset "bootstrap/dist/css/bootstrap.min.css"}}"  

{{ghost_head}} prints scripts and styles to top  
{{ghost_foot}} prints scripts and styles to bottom  


Bower  
---------  
Bower is configured to install into assets folder so  
```  
bower install bootstrap  
```  
would install bootstrap to assets/boostrap  


Menu for static pages  
----  
I'm about to dig into how this would be built :)  
