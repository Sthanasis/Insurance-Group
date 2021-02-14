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
          :bindToValue.sync="emailData.email"
        />
        <Input
          element="input"
          inputType="text"
          placeholder="Email"
          :bindToValue.sync="emailData.name"
        />
      </div>
      <div class="textarea">
        <h4>{{ $t('contact.sendMessage') }}</h4>
        <Input element="textarea" :bindToValue.sync="emailData.message" />
      </div>
      <div v-for="item in items" :key="item" :class="item">
        <InfoItem :item="item" />
      </div>
      <div class="submit">
        <Button type="submit" :caption="$t('button.submit')" />
      </div>
    </div>
  </div>
</template>

<script>
import Input from '../UI/Input';
import Button from '../UI/Button';
import InfoItem from '../UI/Infoitem';
import items from '../mixins/contact';

import emailjs from 'emailjs-com';

export default {
  mixins: [items],
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
  },
  methods: {
    sendEmail: e => {
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target).then(
        result => {
          console.log('SUCCESS!', result.status, result.text);
        },
        error => {
          console.log('FAILED...', error);
        },
      );
    },
  },
};
</script>

<style>
.grid-container {
  display: grid;
  gap: 30px;
  grid-template-columns: 400px 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px 20px;
  grid-template-areas:
    'inputs phone'
    'textarea mobile'
    'textarea email'
    'textarea facebook'
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
  padding-right: 15px;
}

.grid-container .infoItem span:last-of-type {
  color: var(--mblue);
}

.grid-container .infoItem span:first-of-type {
  font-size: 30px;
  margin-right: 10px;
}
</style>
