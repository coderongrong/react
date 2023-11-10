<template>
    <div id='sss'>
        tesHooks
    </div>
</template>

<script setup lang='ts'>
class Animal {
    constructor(private name: string, public age: number) {
        // console.log(this.name)
    }
}

class Cat extends Animal {
    constructor(name: string, age: number) {
        super(name, age);
        // console.log(this.name)
    }
}

let cat = new Cat("tom", 10);
// console.log(cat.name);
</script>
