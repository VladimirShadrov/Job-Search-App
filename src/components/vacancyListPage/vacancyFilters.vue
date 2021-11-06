<template>
  <div class="vacancy__filters">
    <div class="vacancy__filters-desktop">
      <div class="vacancy__filters-item">
        <div class="vacancy__filters-item-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.024 15.0588H17.1123L23.9435 21.9037L21.9037 23.9435L15.0588 17.1123V16.0308L14.6824 15.6544C13.1286 16.9891 11.1093 17.7968 8.89842 17.7968C3.98374 17.7968 0 13.8131 0 8.89842C0 3.98374 3.98381 0 8.89842 0C13.813 0 17.7968 3.98374 17.7968 8.89842C17.7968 11.1093 16.9891 13.1286 15.6475 14.6824L16.024 15.0588ZM2.73799 8.89842C2.73799 12.3003 5.49651 15.0588 8.89842 15.0588C12.3003 15.0588 15.0588 12.3003 15.0588 8.89842C15.0588 5.49651 12.3003 2.73799 8.89842 2.73799C5.49651 2.73799 2.73799 5.49651 2.73799 8.89842Z"
              fill="#5964E0"
            />
          </svg>
        </div>
        <input
          type="text"
          class="vacancy__filters-item-input"
          placeholder="Filter by title, companies, expertise…"
        />
      </div>

      <div class="vacancy__filters-item">
        <div class="vacancy__filters-item-icon">
          <svg
            width="17"
            height="24"
            viewBox="0 0 17 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.4477 0C10.6804 0 12.7796 0.870546 14.3585 2.45105C17.2803 5.37556 17.6434 10.8781 15.1348 14.2255L8.4477 23.894L1.75057 14.2119C-0.747997 10.8781 -0.384894 5.37556 2.53693 2.45105C4.11575 0.870546 6.21459 0 8.4477 0ZM5.47357 8.29091C5.47357 9.97484 6.84272 11.3455 8.52485 11.3455C10.207 11.3455 11.5761 9.97484 11.5761 8.29091C11.5761 6.60698 10.207 5.23636 8.52485 5.23636C6.84272 5.23636 5.47357 6.60698 5.47357 8.29091Z"
              fill="#5964E0"
            />
          </svg>
        </div>
        <input
          type="text"
          class="vacancy__filters-item-input"
          placeholder="Filter by location…"
        />
      </div>

      <div class="vacancy__filters-item">
        <div class="vacancy__filters-item-checkbox-wrapper">
          <label class="vacancy__filters-item-label">
            <input type="checkbox" class="vacancy__filters-item-checkbox" />
            <span class="vacancy__filters-item-checkbox-icon">
              <svg
                width="15"
                height="12"
                viewBox="0 0 15 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6.56948L4.57248 10.142L13.7144 1"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
            </span>
            <span class="vacancy__filters-item-fulltime-value">
              Full Time Only
            </span>
            <span class="vacancy__filters-item-fulltime-value-tablet">
              Full Time
            </span>
          </label>
        </div>
        <button class="vacancy__filters-item-button">Search</button>
      </div>
    </div>

    <div class="vacancy__filters-mobile">
      <div class="vacancy__filters-mobile-item">
        <input
          type="text"
          class="vacancy__filters-mobile-input"
          placeholder="Filter by title, companies, expertise"
        />
        <div class="vacancy__filters-mobile-filter-icon" @click="openModal">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.1076 1.50591e-06H0.860224C0.538187 -0.000593357 0.243138 0.175089 0.0960199 0.454871C-0.0531279 0.738422 -0.0269509 1.07987 0.163593 1.33883L6.84866 10.5411C6.85089 10.5443 6.85333 10.5473 6.85556 10.5504C7.09845 10.8709 7.22995 11.2591 7.23056 11.6579V19.1605C7.22914 19.3825 7.31842 19.5961 7.47853 19.7537C7.63884 19.9112 7.85677 20 8.08405 20C8.19951 19.9998 8.31396 19.9774 8.4207 19.934L12.1772 18.5345C12.5136 18.4339 12.7371 18.1236 12.7371 17.75V11.6579C12.7377 11.2591 12.8692 10.8709 13.1118 10.5504C13.1141 10.5473 13.1165 10.5443 13.1187 10.5411L19.804 1.33864C19.9946 1.07987 20.0207 0.73862 19.8716 0.45507C19.7247 0.175089 19.4294 -0.000593357 19.1076 1.50591e-06Z"
              fill="#6E8098"
            />
          </svg>
        </div>
        <button class="vacancy__filters-mobile-button">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.3533 12.549H14.2603L19.9529 18.2531L18.2531 19.9529L12.549 14.2603V13.359L12.2353 13.0453C10.9405 14.1576 9.25775 14.8307 7.41535 14.8307C3.31979 14.8307 0 11.5109 0 7.41535C0 3.31979 3.31984 0 7.41535 0C11.5109 0 14.8306 3.31979 14.8306 7.41535C14.8306 9.25775 14.1576 10.9405 13.0396 12.2353L13.3533 12.549ZM2.28166 7.41535C2.28166 10.2503 4.58043 12.549 7.41535 12.549C10.2503 12.549 12.549 10.2503 12.549 7.41535C12.549 4.58043 10.2503 2.28166 7.41535 2.28166C4.58043 2.28166 2.28166 4.58043 2.28166 7.41535Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div
        class="vacancy__filters-modal"
        v-if="isVisible"
        :class="{ 'v-tansparent': isTransparent }"
      >
        <div
          class="vacancy__filters-modal-container"
          :class="{ 'v-tansparent': isTransparent }"
        >
          <div class="vacancy__filters-modal-item">
            <div class="vacancy__filters-modal-item-icon">
              <svg
                width="17"
                height="24"
                viewBox="0 0 17 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.44772 0C10.6804 0 12.7797 0.870546 14.3585 2.45105C17.2803 5.37556 17.6434 10.8781 15.1348 14.2255L8.44772 23.894L1.75059 14.2119C-0.747974 10.8781 -0.384871 5.37556 2.53695 2.45105C4.11577 0.870546 6.21462 0 8.44772 0ZM5.47359 8.29091C5.47359 9.97484 6.84274 11.3455 8.52487 11.3455C10.207 11.3455 11.5762 9.97484 11.5762 8.29091C11.5762 6.60698 10.207 5.23636 8.52487 5.23636C6.84274 5.23636 5.47359 6.60698 5.47359 8.29091Z"
                  fill="#5964E0"
                />
              </svg>
            </div>

            <input
              type="text"
              class="vacancy__filters-modal-item-input"
              placeholder="Filter by location…"
            />
          </div>

          <div class="vacancy__filters-modal-item">
            <label
              class="
                vacancy__filters-item-label vacancy__filters-item-label-mobile
              "
            >
              <input type="checkbox" class="vacancy__filters-item-checkbox" />
              <span class="vacancy__filters-item-checkbox-icon">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 6.56948L4.57248 10.142L13.7144 1"
                    stroke="white"
                    stroke-width="2"
                  />
                </svg>
              </span>
              <span class="vacancy__filters-item-fulltime-value-tablet">
                Full Time Only
              </span>
            </label>
            <button
              @click.stop="closeModal"
              class="
                vacancy__filters-item-button vacancy__filters-item-button-modal
              "
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VacancyFilters',
  data() {
    return {
      isVisible: false,
      isTransparent: true,
    };
  },
  methods: {
    openModal() {
      this.isVisible = !this.isVisible;
      document.body.classList.add('position-fixed');

      setTimeout(() => (this.isTransparent = !this.isTransparent), 100);
    },
    closeModal() {
      document.body.classList.remove('position-fixed');
      this.isTransparent = !this.isTransparent;

      setTimeout(() => (this.isVisible = !this.isVisible), 300);
    },
  },
};
</script>
