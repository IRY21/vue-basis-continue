<template>
  <div class="container">
    <form class="pt-3">
      <div class="form-group">
        <label for="email">Email</label>
        <input 
          type="email" 
          id="email" 
          class="form-control"
          :class="{'is-invalid': $v.email.$error}"
          @blur="$v.email.$touch()"
          v-model="email"
        >
        <div class="invalid-feedback" v-if="!$v.email.required">Email field is required</div>
        <div class="invalid-feedback" v-if="!$v.email.email">Email format is invalid</div>
        <div class="invalid-feedback" v-if="!$v.email.uniqEmail">This email is alredy exists</div>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input 
          type="password" 
          id="password" 
          class="form-control"
          :class="{'is-invalid': $v.password.$error}"
          @blur="$v.password.$touch()"
          v-model="password"
        >
        <div class="invalid-feedback" v-if="!$v.password.required">Password field is required</div>
        <div class="invalid-feedback" v-if="!$v.password.minLength">
          Min length of password is {{ $v.password.$params.minLength.min }}. Now it is {{ password.length }}.
        </div>
      </div>

      <div class="form-group">
        <label for="confirm">Confirm password</label>
        <input 
          type="password" 
          id="confirm" 
          class="form-control"
          :class="{'is-invalid': $v.confirmPass.$error}"
          @blur="$v.confirmPass.$touch()"
          v-model="confirmPass"
        >
        <div class="invalid-feedback" v-if="!$v.confirmPass.sameAs">
          Password should match
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPass: ''
    }
  },

  validations: {
    email: {
      required,
      email,
      uniqEmail(newEmail) {
        return new Promise((resolve, reject) => {
          if (newEmail === '') return true;
          
          setTimeout(() => {
            const val = newEmail !== 'test@mail.ru';
            resolve(val);
          }, 3000);
        });
      }
    },
    password: {
      required,
      minLength: minLength(6)
    },
    confirmPass: {
      required,
      sameAs: sameAs('password')
    }
  }
};
</script>

<style scoped>
</style>
