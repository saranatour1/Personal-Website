<!-- Popup to make people star this repo -->
<script>

  	import Modal from './Modal.svelte';
		let firstTime = true;
		$: showModal = true;



		
	

			$:console.log(showModal, firstTime)


	</script>

		{#if firstTime && showModal}
			<Modal {showModal} />
		{/if}



