Frenzli.BreadcrumbsController = Ember.Controller.extend({
  needs: ["application"],

  breadContent: function() {
    var routes = Frenzli.get("Router.router.currentHandlerInfos");
    var tailRoute = routes;
    tailRoute = tailRoute.slice(1, tailRoute.length - 1);
    var segments = $.map(tailRoute, function(route) {
        var context, name;
        if(route.isDynamic && route.context) {
            name = route.context.get("id");
            context = route.context
        } else {
            var dotIndex = route.name.lastIndexOf('.') + 1;
            name = Ember.String.capitalize(route.name.slice(dotIndex));
        }
        return {
            name: name,
            routePath: route.name,
            context: context
        }
    })
    return segments;
  }.property("controllers.application.currentPath"),

  gotoRoute: function(routeOpt) {
    if(routeOpt.context) {
      this.transitionToRoute(routeOpt.routePath, routeOpt.context);
    } else {
      this.transitionToRoute(routeOpt.routePath);
    }
   }
});