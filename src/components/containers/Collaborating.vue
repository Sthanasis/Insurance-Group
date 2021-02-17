<template>
  <div id="collaboratingCompanies" class="pageContainer">
    <div class="header">
      <span>
        {{ $t('navigation.navItem3') }}
      </span>
    </div>
    <div class="companies-grid">
      <CompanyLogo
        v-for="company in companies"
        :key="company"
        :company="company"
      />
    </div>
  </div>
</template>

<script>
import CompanyLogo from '../UI/CompanyLogo';
export default {
  data() {
    return {
      companies: [
        'aig',
        'allianz',
        'arag',
        'ergo',
        'ethniki',
        'europaiki_pisti',
        'hellas_service',
        'generali_group',
        'interamerican',
        'intersalonika',
        'nhs',
        'nrg',
      ],
    };
  },
  components: {
    CompanyLogo,
  },
};
</script>

<style>
.companies-grid {
  display: grid;
  margin: 50px 0;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 5px 20px;
}

@media (max-width: 992px) {
  .companies-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
