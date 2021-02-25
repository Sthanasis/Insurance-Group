<template>
  <div>
    <div class="footer-info">
      <Logo />
      <div>
        <span>Ωραριο Λειτουργίας</span>
        <span>Δευτέρα - Παρασκευή</span>
        <span>09:30 - 21:00</span>
      </div>
      <div>
        <span>Βρείτε μας</span>
        <span data-icon="facebook"></span>
        <span data-icon="linkedIn"></span>
      </div>
    </div>
    <div class="copyright">
      <span
        >Athanasios Efthymiou - Insurance Group Copyright {{ year }}. All right
        reserved.</span
      >
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
</style>
