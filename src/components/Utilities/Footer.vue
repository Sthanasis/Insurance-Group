<template>
  <div>
    <div class="footer-info">
      <Logo />
      <hr />
      <div>
        <span>{{ $t('footer.workhours') }}</span>
        <span>{{ $t('footer.monday') }} - {{ $t('footer.friday') }}</span>
        <span>09:30 - 21:00</span>
      </div>
      <hr />
      <div>
        <span>{{ $t('footer.findus') }}</span>
        <span data-icon="facebook"></span>
        <span data-icon="linkedIn"></span>
      </div>
    </div>
    <div class="copyright">
      <span>Athanasios Efthymiou - Insurance Group</span>
      <span>Copyright <span data-icon="copyright"></span> {{ year }}.</span>
      <span>All rights reserved.</span>
    </div>
  </div>
</template>

<script>
import Logo from '../UI/Logo';
export default {
  components: {
    Logo,
  },
  data() {
    return { year: new Date().getFullYear() };
  },
};
</script>

<style>
.footer-info {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--lgreen);
  color: #fff;
  padding: 20px 0;
}

hr {
  display: none;
}

.footer-info [data-icon]::before {
  color: #fff;
  font-size: 30px;
}

.footer-info .logoName {
  font-size: 15px;
}

.footer-info > div {
  padding: 5px 25px;
  display: flex;
  align-items: center;
}

.footer-info .brandContainer {
  cursor: default;
}

.footer-info .brandContainer .logo::before,
.footer-info .brandContainer .logoName span {
  color: #fff;
}

.footer-info > div:nth-of-type(2) {
  border-right: 1px solid lightcyan;
  border-left: 1px solid lightcyan;
}

.footer-info > div:nth-of-type(2) span {
  padding: 10px;
}

.copyright {
  padding: 30px 0;
  background-color: var(--mblue);
  color: #fff;
}

.copyright span:not(span[data-icon='copyright']) {
  margin-right: 5px;
}

@media (max-width: 992px) {
  .footer-info > div:nth-of-type(2) {
    flex-flow: column;
  }
}

@media (max-width: 765px) {
  .footer-info {
    flex-flow: column;
    align-items: start;
  }

  hr {
    display: block;
    width: 20vw;
    margin-left: 20px;
    border-top: 1px solid lightcyan !important;
  }

  .footer-info > div:nth-of-type(2) {
    border-right: none;
    border-left: none;
    align-items: start;
    /* border-top: 1px solid lightcyan;
    border-bottom: 1px solid lightcyan; */
  }

  .footer-info > div:nth-of-type(2) span {
    padding: 10px 0;
  }

  .copyright {
    padding: 30px 20px;
    text-align: start;
  }
}
</style>
