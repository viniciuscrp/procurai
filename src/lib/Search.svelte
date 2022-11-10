<script>
    import {Button, Select, SelectItem} from "carbon-components-svelte";
    import {Cities, ServiceTypes, Places} from "../utils.ts";
    import Result from "./Result.svelte";
    import Footer from "./Footer.svelte";

    let selectedCity = 2;
    let selectedType = 1
    export let places = [];
    export let appliedSearch = false;

    function handleSearch() {
        places = Places.filter((place) => place.type === selectedType && place.city === selectedCity);
        places = places.sort((a, b) => a.text.localeCompare(b.text));
        appliedSearch = true;
    }
</script>

<div class="search-container">
    <Select style="margin-right: 10px" labelText="Selecione a cidade"
            on:change={(e) => {selectedCity = e.detail; appliedSearch = false}}>
        {#each Cities as city}
            <SelectItem value={city.value} text={city.text}/>
        {/each}
    </Select>
    <Select style="margin-right: 10px" labelText="Selecione o objetivo"
            on:change={(e) => {selectedType = e.detail; appliedSearch = false}}>
        {#each ServiceTypes as type}
            <SelectItem value={type.value} text={type.text}/>
        {/each}
    </Select>
    <Button on:click={handleSearch} size="small" style="height: 40px" kind="secondary">Pesquisar</Button>
</div>

<Result places={places} appliedSearch={appliedSearch}/>
<Footer />

<style>
    .search-container {
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
</style>
