# Install
Create a copy of example environment files and add your environment information to it:
* `.env.example` >>  `.env`

Install composer packages:
```shell
composer install
```

Create the database and run the migrate
```shell
php artisan migrate
```

# Run Project

Run:
```shell
php artisan serve
```
Will run on [http://localhost:8000](http://localhost:8000)
