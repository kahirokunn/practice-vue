## The box and pagination widget demo:

![](https://github.com/k-okina/practice-vue/blob/master/demo.gif)

## Usage:

> Notice: for the pagination widget code, just look into resources/assets/js/components/widgets/pagination/LaravelFormatPagination.vue 
> Usage examples are in house resources/assets/js/components/articles/Index.vue

### 1.Clone the Repo

```
git clone https://github.com/k-okina/practice-vue.git

cd practice-vue

composer install
```

### 2.Setup Database

edit your .env file and setup database for laravel

### 3.Seed some data

in your project root (`laravel-vue-pagination/`):

```
php artisan migrate

php artisan db:seed
```

### 4.See the demo
run a local serve and see the demo :
```
php artisan serve
```
visit localhost:8000 and you are good to go 
