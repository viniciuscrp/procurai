<script>
    import {Tile, ToastNotification} from "carbon-components-svelte";

    export let places;
    export let appliedSearch;
</script>

<div class="result-container">
    {#if places.length > 0}
        {#each places as place}
            <Tile style="margin: 10px 0;">
                <p class="place-name">{place.text}</p>
                <p class="remaining-item">
                    Site/Rede Social:
                    {#if place.site}
                        <a href={place.site}>{place.site}</a>
                    {/if}
                    {#if !place.site}
                        Não informado
                    {/if}
                </p>
                <p class="remaining-item">Telefone: {place.phone || 'Não informado'}</p>
            </Tile>
        {/each}
    {/if}
    {#if places.length === 0 && appliedSearch}
        <ToastNotification
                fullWidth
                title=""
                kind="warning"
                subtitle="Nenhum resultado foi encontrado para os itens selecionados acima."
        />
    {/if}
</div>

<style>
    .result-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-bottom: 100px;
    }

    .place-name {
        font-weight: bold;
        text-align: start;
    }

    .remaining-item {
        text-align: start;
    }
</style>
