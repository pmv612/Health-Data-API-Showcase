import { createApp } from 'vue';
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

// PrimeVue Components
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import RadioButton from 'primevue/radiobutton'
import InputNumber from 'primevue/inputnumber'
import Checkbox from 'primevue/checkbox'
import Rating from 'primevue/rating'
import Button from 'primevue/button'
import Toolbar from "primevue/toolbar";

const app = createApp(App)

// Apply PrimeVue with custom settings
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})

// Register PrimeVue components globally
app.component('pv-input-text', InputText)
app.component('pv-textarea', Textarea)
app.component('pv-radio-button', RadioButton)
app.component('pv-input-number', InputNumber)
app.component('pv-checkbox', Checkbox)
app.component('pv-rating', Rating)
app.component('pv-button', Button)
app.component('pv-toolbar', Toolbar)


app.mount('#app')