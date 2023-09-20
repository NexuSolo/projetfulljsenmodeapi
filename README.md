##  Pour ajouter un utilisateur dans l'API :
```
http://localhost:3000/api/user/add-user
```
avec dans le body 
```
{
    "username": "John Doe"
}
```
-----------------
## Pour récupérer un utilisateur dans l'API :
```
http://localhost:3000/api/user/:id
```
---------------
## Pour supprimer un utilisateur dans l'API :
```
http://localhost:3000/api/user/delete/:id
```
----------------
## Pour modifier un utilisateur dans l'API :
```
http://localhost:3000/api/user/update/:id
```

avec dans le body :
```
{
    "username": "John Doe"
}
```