<template>
  <div class="star" :class="starType">
    <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span><!--:key=''-->
  </div>
</template>
<script>
  const LEBGTH = 5
  const CLA_ON = 'on'
  const CLA_OFF = 'off'
  const CLA_HALF = 'half'
  export default{
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    computed: {
      starType () {
        return 'star-' + this.size
      },
      itemClasses () {
        let result = []
        let score = Math.floor(this.score * 2) / 2
        let hasDeciamal = score % 1 !== 0
        let integer = Math.floor(score)
        for (let i = 0; i < integer; i++) {
          result.push(CLA_ON)
        }
        if (hasDeciamal) {
          result.push(CLA_HALF)
        }
        while (result.length < LEBGTH) {
          result.push(CLA_OFF)
        }
        return result
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../comment/stylus/mixin.styl"
  .star
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('star24_on')
        &.off
          bg-image('star24_off')
        &.half
          bg-image('star24_half')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('star36_on')
        &.off
          bg-image('star36_off')
        &.half
          bg-image('star36_half')
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right 0
        &.on
          bg-image('star48_on')
        &.off
          bg-image('star48_off')
        &.half
          bg-image('star48_half')

</style>
