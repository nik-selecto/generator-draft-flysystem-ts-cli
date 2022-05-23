export * from <%- `'./${appName.trim().replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase().replace(/\.?adapter/, '')}.adapter'` %>;
