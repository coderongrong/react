<template>
    <div id='sss'>
        tesHooks
    </div>
</template>

<script setup lang='ts'>
const enum books {
    ANCD,
    CSS,
    C,
}

console.log("abc", books);

setTimeout(() => {
    const ele: HTMLElement | null = document.getElementById("sss");
    ele!.innerHTML = "abc";
    console.log(ele);
}, 1000);

let a: string | number | undefined
a = 10
a.toString()
</script>
