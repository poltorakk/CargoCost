<template>
    <div class="search-Input">
        <input type="text" placeholder="Search" class="search-Input__input text-normal-regular">
        <img class="search-Input__icon" :src="require('@/assets/icons/Search.svg')">
    </div>
</template>
  
<script>
export default {
    name: "SearchInput"
}
</script>

<style lang="scss" scoped>
.search-Input {
    border-radius: 12px;
    gap: 50px;
    display: flex;
    align-items: center;
    border: 1px solid var(--lines);
    width: 340px;
    max-width: 100%;
    height: 44px;
    color: var(--lines);
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10px 16px 10px 16px;
    background: linear-gradient(var(--bars), var(--bars)) padding-box,
    var(--yellow-gold-stripe) border-box;

    &:hover {
        border: 1px solid transparent;
        color: var(--white);
        box-shadow: 0 0 10px rgba(232, 189, 106, 0.5);
        cursor: pointer;
    }

    &__input {
        background: transparent;
        border: 0;
        outline: 0;
        width: 90%;
        height: 40px;
        color: var(--lines);
        gap: 8px;
    }

    &__input:hover {
        color: var(--white);
        transition: color 0.5s ease;
    }

    &__icon {
        height: 20px;
        width: 20px;
        cursor: default;
    }

    &:disabled,
    &__input:disabled {
        color: var(--lines);
        background-color: var(--gray);
    }
}
</style>
  