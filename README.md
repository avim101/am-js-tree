
[![npm version](https://badge.fury.io/js/am-js-tree.svg)](https://badge.fury.io/js/am-js-tree)
[![Bower version](https://badge.fury.io/bo/am-js-tree.svg)](https://badge.fury.io/bo/am-js-tree)
[![Dependency Status](https://gemnasium.com/badges/github.com/avim101/am-js-tree.svg)](https://gemnasium.com/github.com/avim101/am-js-tree)
 
am-js-tree
========

Light Angular Component that wraps [jsTree] library.


## Dependencies


The amJsTree depends on the following libraries:
*   jquery >= 1.9.1
*   angular >= 1.5.x
*   jstree >= 3.3.3 (tested on version 3.3.3 may support older versions as well)


## Install


You can install the amJsTree via bower:

```bat
bower install am-js-tree --save
```

or via npm:
```bat
npm install am-js-tree --save
```


or you can add the amJsTree.min.js file to your HTML page:
```html
<script src="jquery.js"/>
<script src="angular-1.5.x.js"/>
<script src="jstree.min.js"/>
<script src="am-js-tree.min.js"/>
```

Add the `amJsTree` to your module dependencies

```javascript

 angular.module('myApp',['amJsTree'])

```

# Documentation

The main purpose for this wrapper is to integrate easily jsTree in your angular application and work 
with the jsTree api exactly as if you were using the jquery plugin.
this wrapper is a very simple component that registers your selected jsTree/jsTree plugins event and attaches them to your controller.
NO WATCHERS!

You can find the jsTree documentation at [this link]

## Usage

```html
<am-js-tree config="jsTreeConfig"></am-js-tree>
```

* `config` - This is the configuration object of the jsTree, if you will not supply one, an empty one will be created (not mandatory).


### Registering for events
You can register a callback to any Js Tree and plugins event:

* `events` - Add the events object and specify the name of the events to register for, And a callback for each event 
in the following event's format e.g  
```javascript
events: {
    'eventName': cb 
    }
    
```
The cb function will always contain two arguments: 
* event - the event
* data - an object that contains all arguments that return from jsTree event
  

Example:
```html
<am-js-tree config="$ctrl.jsTreeConfig"></am-js-tree>
```

```javascript
(function () {
    
  class MyComponent{
    constructor() {
        this.jsTreeConfig = {
          core: {
            check_callback: (operation, node, node_parent, node_position, more) => {
              console.log(operation, node, node_parent, node_position, more);
            }
          },
          events: {
            //like the jsTree api only wrapped in event object
            'init.jstree': (e, data) => {
                console.log(e, data);
            },
            'ready.jstree': (e, data) => {
              console.log(e, data);
            },
            'load_node.jstree': (e, data) => {
                console.log(e, data);
            }
          }
        }
    }
  }


  angular.module('myApp')
    .component('myComponent', {
      controller: [MyComponent]
    });

})();
```

### Using the Js Tree API from your controller 
* `jsTree instance` is an object that contains the list of events with the callback objects.

Example:
```html
<am-js-tree config="$ctrl.jsTreeConfig"></am-js-tree>
```

```javascript
(function () {
    
  class MyComponent{
    constructor() {
        this.jsTreeConfig = {
          core: {
             data: [{"id" : 1, "text" : "Node 1"}, {"id" : 2, "text" : "Node 2"}];
          },
          events: {
             'ready.jstree': (e, data) => {
                  this.jsTreeInstance = data.instance;
             }
          }
        };
        
        //now lets say we want to add more nodes
        //once we have the jsTree instance we can do everything exactly as it appears in the jsTree docs
         this.jsTreeInstance.settings.core.data.push({"id" : 3, "text" : "Node 3"}, {"id" : 4, "text" : "Node 4"});
         this.jsTreeInstance.refresh();
    }
  }


  angular.module('myApp')
    .component('myComponent', {
      controller: [MyComponent]
    });

})();
```

License
----

MIT

[jsTree]:http://www.jstree.com/
[this link]:http://www.jstree.com/api/
