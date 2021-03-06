<template>
  <div id="contact" class="pageContainer">
    <div class="header">
      <span>
        {{ $t('navigation.navItem4') }}
      </span>
    </div>
    <h3 class="subheader">
      {{ $t('contact.contactUs') }}
    </h3>
    <div class="grid-container">
      <div class="inputs">
        <Input
          element="input"
          inputType="text"
          :placeholder="$t('input.name')"
          v-model="emailData.name"
        />
        <Input
          element="input"
          inputType="text"
          placeholder="Email"
          v-model="emailData.email"
        />
      </div>
      <div class="textarea">
        <div style="font-size: 1rem; margin: 5px 0; font-weight:bold">
          {{ $t('contact.sendMessage') }}
        </div>
        <Input element="textarea" v-model="emailData.message" />
      </div>
      <div v-for="item in items" :key="item.icon" :class="item.icon">
        <InfoItem :item="item" />
      </div>
      <div class="submit">
        <Button
          type="submit"
          :caption="$t('button.submit')"
          :disabled="emailSent"
          @clickevent="sendEmail"
        />
      </div>
    </div>
    <div class="gdpr-button">
      <Button :caption="$t('button.gdpr')" @clickevent="showGdpr" type="icon" />
    </div>
    <Gdpr v-if="gdpr" @hide="hideGdpr" />
    <Map />
  </div>
</template>

<script>
import Input from '../UI/Input';
import Button from '../UI/Button';
import InfoItem from '../UI/Infoitem';
import items from '@/mixins/contact';
import toasts from '@/mixins/toasts';
import Map from '../Utilities/Map';
import Gdpr from '../Utilities/Gdpr';

import { sendEmail } from '@/common-js/common';

export default {
  mixins: [items, toasts],
  data() {
    return {
      emailSent: false,
      gdpr: false,
    };
  },
  computed: {
    emailData() {
      return {
        email: '',
        name: '',
        message: '',
      };
    },
  },
  components: {
    Input,
    InfoItem,
    Button,
    Map,
    Gdpr,
  },
  methods: {
    sendEmail() {
      this.emailSent = true;
      this.trimEmailData();
      if (this.emailIsValid()) {
        sendEmail(this.emailData)
          .then(res => {
            if (res.data.status === 'success') {
              this.successToast(this.$t('utils.email_sent'));
            }
            for (let key in this.emailData) {
              this.emailData[key] = '';
            }
            this.emailSent = false;
          })
          .catch(err => {
            this.errorToast(this.$t('utils.error'));
            this.emailSent = false;
            console.error(err);
          });
      } else {
        this.emailSent = false;
      }
    },
    trimEmailData() {
      for (let key in this.emailData) {
        this.emailData[key] = this.emailData[key].trim();
      }
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(email)) {
        return true;
      } else {
        return false;
      }
    },
    emailIsValid() {
      let isValid = true;
      if (this.emailData.name === '') {
        isValid = false;
        this.errorToast(this.$t('emailform.name_missing'));
        return isValid;
      }

      if (this.emailData.email === '') {
        isValid = false;
        this.errorToast(this.$t('emailform.email_missing'));
        return isValid;
      } else {
        if (!this.validateEmail(this.emailData.email)) {
          this.errorToast(this.$t('emailform.email_invalid'));
          isValid = false;
          return isValid;
        }
      }

      if (this.emailData.message === '') {
        isValid = false;
        this.errorToast(this.$t('emailform.message_missing'));
        return isValid;
      }
      return isValid;
    },
    showGdpr() {
      this.gdpr = true;
      document.querySelector('body').style.overflow = 'hidden';
    },
    hideGdpr() {
      this.gdpr = false;
      document.querySelector('body').style.overflow = 'auto';
    },
  },
};
</script>

<style>
.grid-container {
  display: grid;
  gap: 30px;
  grid-template-columns: 550px 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px 20px;
  grid-template-areas:
    'inputs phone'
    'textarea mobile'
    'textarea email'
    'textarea facebook'
    'textarea linkedIn'
    'textarea location'
    'submit .';
}

.inputs {
  grid-area: inputs;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  /* justify-content: space-between; */
}

.textarea {
  grid-area: textarea;
}

.phone {
  grid-area: phone;
}
.mobile {
  grid-area: mobile;
}

.email {
  grid-area: email;
}

.facebook {
  grid-area: facebook;
}

.location {
  grid-area: location;
}

.submit {
  grid-area: submit;
  text-align: end;
}

.grid-container .infoItem span:last-of-type {
  color: var(--mblue);
}

.grid-container .infoItem span:first-of-type {
  font-size: 30px;
  margin-right: 10px;
}

.grid-container .infoItem span:first-of-type::before {
  color: var(--lblue);
  font-size: 30px;
}

.gdpr-button button {
  color: var(--mblue);
  font-weight: bold !important;
}

@media (max-width: 992px) {
  .grid-container {
    grid-template-columns: 1fr;
    grid-template-areas:
      'phone'
      'mobile'
      'email'
      'facebook'
      'linkedIn'
      'location'
      'inputs'
      'textarea'
      'textarea'
      'textarea'
      'textarea'
      'submit';
  }

  .grid-container .infoItem span:first-of-type {
    margin-right: 5px;
  }

  .submit {
    padding-right: 0;
  }
}

@media (max-width: 765px) {
  .grid-container {
    grid-template-rows: 0.5fr;
    gap: 20px;
  }

  .inputs {
    grid-template-columns: 1fr;
  }

  .grid-container .infoItem span:last-of-type {
    font-size: 15px;
  }
}
</style>
