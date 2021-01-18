<template>
  <div>
    <hero></hero>
    <section class="section">
      <div class="container">
        <h1 class="title">Featured Courses</h1>
        <div class="columns">
          <div class="column is-one-quarter">
            <!-- CARD-ITEM -->
              <course-card/>
            <!-- CARD-ITEM-END -->
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title">Featured Articles</h1>
        <div class="columns">
          <div class="column is-one-quarter">
            <!-- CARD-ITEM -->
            <blog-card/>
            <!-- CARD-ITEM-END -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import Hero from '~/components/shared/Hero';
import BlogCard from '../components/BlogCard.vue';
import CourseCard from '../components/CourseCard.vue';
export default {
  components: {
    BlogCard,CourseCard,Hero
    
  }
}
</script>
    CourseCard

<style scoped lang="scss">

  // Home page
  .links {
    padding-top: 15px;
  }
</style>