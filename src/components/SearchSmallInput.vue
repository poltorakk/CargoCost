<template>
    <div class="search-input-small">
        <input type="text" class="search-input-small__input text-small-regular" placeholder="Search">
        <img class="search-input-small__icon" :src="require('@/assets/icons/Search.svg')">
    </div>
</template>
  
<script>
export default {
    name: "SearchSmallInput"
}
</script>

<style lang="scss" scoped>
.search-input-small {
    background: var(--bars);
    border-radius: 14px;
    gap: 4px;
    display: flex;
    align-items: center;
    border: 1px solid var(--lines);
    width: 200px;
    max-width: 100%;
    height: 28px;
    color: var(--lines);
    justify-content: space-between;
    box-sizing: border-box;
    padding: 6px 16px 6px 16px;
    background: linear-gradient(var(--bars), var(--bars)) padding-box,
        var(--yellow-gold-stripe) border-box;

    &:hover {
        border: 1px solid transparent;
        color: var(--lines);
        box-shadow: 0 0 10px rgba(232, 189, 106, 0.5);
        cursor: pointer;
        border: 1px solid var(--yellow-gold-300);
    }

    &__input {
        background: transparent;
        border: 0;
        outline: 0;
        width: 75%;
        color: var(--lines);
    }

    &__input:hover {
        color: var(--white);
        transition: color 0.5s ease;
    }

    // &__input::placeholder {
    //     font-family: Inter, sans-serif;
    //     font-size: 16px;
    //     font-weight: 400;
    //     line-height: 24px;
    //     letter-spacing: 0em;
    //     text-align: left;
    // }

    &__icon {
        height: 12px;
        width: 12px;
        cursor: default;
    }

}
</style>
  