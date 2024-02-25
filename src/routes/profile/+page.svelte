

<script>
    import { authStore } from '../../lib/stores/authStore.js';
    authStore.subscribe(curr => {
        console.log(authStore.current);
    });
</script>

<h1>Profile</h1>    
<p>Welcome </p> 
