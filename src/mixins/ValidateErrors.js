export default {
    data() {
        return {
            error_message: [],
            error_type: [],
            timeout_validate: null,
        }

    },
    methods: {
        errorMessage(error) {
            this.error_message = []
            this.error_type = []
            clearTimeout(this.timeout_validate);

            for (const [key, value] of Object.entries(error.response.data.errors)) {
                this.error_message.push(value)
                this.error_type.push(key)
            }
            console.log(this.error_type)
            console.log(this.error_type)

            this.timeout_validate = setTimeout(() => (this.error_message = []), 3000);
        }
    }
}