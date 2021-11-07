<template>
  <div class="description__content">
    <div class="description__content-headline">
      <div class="description__vacancy">
        <div class="description__vacancy-date">
          <span class="description__vacancy-value">5</span>
          <span class="description__vacancy-time">h</span>
          <span class="description__vacancy-text">ago</span>
          <span class="description__vacancy-chart">Full Time</span>
        </div>
        <p class="description__vacancy-title">Senior Software Engineer</p>
        <p class="description__employer-location">United Kingdom</p>
      </div>
      <button class="description__headline-button">Apply Now</button>
    </div>
    <p class="description__about">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis sint
      explicabo sapiente ea nisi harum sequi at. Sed consequatur repellendus
      assumenda provident dolores, aliquam nulla neque necessitatibus
      cupiditate, facilis sunt debitis eligendi voluptas voluptatibus ipsam,
      adipisci perspiciatis sit repellat architecto laboriosam. Distinctio,
      libero? Vel dignissimos molestiae vero, rem natus totam.
    </p>

    <h2 class="description__title">Requirements</h2>

    <p class="description__about">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto ut
      vitae corporis, modi minima maiores explicabo reprehenderit magni
      exercitationem cumque earum aperiam. Perferendis cum, adipisci harum ipsam
      molestias ipsum? Accusamus quod est corrupti enim, quae obcaecati nisi a
      esse.
    </p>

    <ul class="description__list">
      <li class="description__list-item" v-for="item in 4" :key="item">
        Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel,
        tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
      </li>
    </ul>

    <h2 class="description__title">What You Will Do</h2>

    <p class="description__about">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto ut
      vitae corporis, modi minima maiores explicabo reprehenderit magni
      exercitationem cumque earum aperiam. Perferendis cum, adipisci harum ipsam
      molestias ipsum? Accusamus quod est corrupti enim, quae obcaecati nisi a
      esse.
    </p>

    <div class="description__duties" v-for="(item, index) in 6" :key="item">
      <div class="description__duties-number">{{ index + 1 }}</div>
      <div class="description__duties-text">
        Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel,
        tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DescriptionContent',
};
</script>
