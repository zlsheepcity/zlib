# opencart snippets and tips
https://www.opencart.com/  
Free open-source eCommerce platform  
OpenCart Version 3.0.3.1  

## links
- https://webkul.com/blog/how-to-create-a-module-in-opencart/

## custom module folders
```
admin
    controller
        extension
            module
    language
        en-gb
            extension
                module
    view
        javascript
        stylesheet
        template
            extension
                module

catalog
    controller
        extension
            module
    model
        extension
            module
```

## Custom module installation (Opencart admin)
1. Upload files
2. GOTO: System → Users → UserGroups
3. Check permissions
4. GOTO: Extensions → Extension, Select «Modules»
5. Press Install button
6. Press Edit button
7. Enable and Save
