export default {
    data() {
        return{
            error_message: null,
        }
    },
    methods: {
        errorMessage(error) {
            console.log(`запрос завершился ошибкой ${error.response.data.errors.password[0] || error.response.data.errors.phone[0]}`)
            this.error_message = error.response.data.errors.password[0] || error.response.data.errors.phone[0];
            setTimeout(() => (this.error_message = null), 3000);
        }
    }
}