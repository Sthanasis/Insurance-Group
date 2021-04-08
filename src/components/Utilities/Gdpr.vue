<template>
  <div class="gdpr-container">
    <div>
      <p>{{ $t('gdpr.header') }}</p>
      <p>{{ $t('gdpr.subheader') }}</p>
      <p>
        {{ $t('gdpr.first.header') }}<br /><br />{{ $t('gdpr.first.body') }}
      </p>
      <p>
        {{ $t('gdpr.second.header') }}<br /><br />{{ $t('gdpr.second.body') }}
      </p>
      <p>
        {{ $t('gdpr.third.header') }}<br /><br />{{ $t('gdpr.third.body') }}
      </p>
      <p>
        {{ $t('gdpr.fourth.header') }}<br /><br />{{ $t('gdpr.fourth.body') }}
      </p>
      <p>
        {{ $t('gdpr.fifth.header') }}<br /><br />{{ $t('gdpr.fifth.body') }}
      </p>
      <p>
        {{ $t('gdpr.sixth.header') }}<br /><br />{{ $t('gdpr.sixth.body') }}
      </p>
      <p>{{ $t('gdpr.footer') }}</p>
    </div>
    <div class="hide" @click="$emit('hide')">x</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.gdpr-container {
  position: fixed;
  z-index: 10;
  height: 100%;
  top: 0;
  left: 0;
  padding: 0 10%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: scroll;
}

.gdpr-container div:first-child {
  background-color: var(--lblue);
  padding: 10% 5%;
  color: white;
}

.gdpr-container p {
  white-space: pre-line;
}

.hide {
  position: fixed;
  font-weight: bold;
  color: white;
  top: 5%;
  right: 0;
  right: 5%;
  text-shadow: none;
  cursor: pointer;
  font-size: 1.2rem;
}
</style>
