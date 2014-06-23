Frenzli.BreadcrumbsController = Ember.Controller.extend({
    needs: ["application"],

    breadContent: function() {
        var mapper = Frenzli.get("routeToBeadcrumbMap");
        var routes = Frenzli.get("Router.router.currentHandlerInfos");
        var tailRoute = routes;
        tailRoute = tailRoute.slice(1, tailRoute.length - 1);
        var segments = $.map(tailRoute, function(route) {
            var context, name, result = [];
            if (mapper[route.name]) {
                if(route.isDynamic && route.context) {
                    //name = route.context.get("id");
                    name = mapper[route.name](route);
                    context = route.context;
                } else {
                    var dotIndex = route.name.lastIndexOf('.') + 1;
                    name = Ember.String.capitalize(route.name.slice(dotIndex));
                }
                if (Array.isArray(name)) {
                    for (var i = 0; i < name.length; i++) {
                        result[i] = {
                            name: name[i],
                            routePath: route.name,
                            context: context
                        }
                    }
                } else  {
                    result = {
                        name: name,
                        routePath: route.name,
                        context: context
                    }
                }
                return result;
            }
            return null;
        })
        return segments;
    }.property("controllers.application.currentPath"),

    actions: {
        gotoRoute: function(routeOpt) {
            if(routeOpt.context) {
              this.transitionToRoute(routeOpt.routePath, routeOpt.context);
            } else {
              this.transitionToRoute(routeOpt.routePath);
            }
        }
    }
});