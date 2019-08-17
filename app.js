require([
	"esri/Map",
	"esri/views/MapView",
	"esri/layers/MapImageLayer"
], function (Map, MapView, MapImageLayer) {

	Vue.component('map-component', {
		template: `<div id="wrapper">
			<div id="map"></div>
			<div class="slider">
				<output class="flex-item" for="sliderWithValue">SLR: {{ SLRVal }} ft</output>
				<input v-model="SLRVal" step="1" min="0" max="10" value="0" type="range">
			</div>
		</div>`,
		data: function () {
			return {
				map: Object,
				SLRVal: 0,
				seaLevelObject: {
					lastVis: 0,
					layers: []
				},
				urls: ["https://coast.noaa.gov/arcgis/rest/services/dc_slr/slr_0ft/MapServer", "https://coast.noaa.gov/arcgis/rest/services/dc_slr/slr_1ft/MapServer", "https://coast.noaa.gov/arcgis/rest/services/dc_slr/slr_2ft/MapServer", "https://coast.noaa.gov/arcgis/rest/services/dc_slr/slr_3ft/MapServer", "https://coast.noaa.gov/arcgis/rest/services/dc_slr/slr_4ft/MapServer", "https://coast.noaa.gov/arcgis/rest/services/dc_slr/slr_5ft/MapServer", "https://coast.noaa.gov/arcgis/rest/services/dc_slr/slr_6ft/MapServer", "https://coast.noaa.gov/arcgis/rest/services/dc_slr/slr_7ft/MapServer", "https://coast.noaa.gov/arcgis/rest/services/dc_slr/slr_8ft/MapServer", "https://coast.noaa.gov/arcgis/rest/services/dc_slr/slr_9ft/MapServer", "https://coast.noaa.gov/arcgis/rest/services/dc_slr/slr_10ft/MapServer"]
			}
		},
		watch: {
			SLRVal: function (newVal) {
				this.seaLevelObject.layers[newVal].visible = true;
				this.seaLevelObject.layers[this.seaLevelObject.lastVis].visible = false;
				this.seaLevelObject.lastVis = newVal;
			}
		},
		mounted() {
			var map = new Map({
				basemap: "dark-gray-vector"
			});
			this.map = map;

			var view = new MapView({
				map: map,
				container: 'map',
				center: [-122.438556, 48.424270],
				zoom: 11
			});

			this.urls.forEach(url => {
				this.initMaplayer(url)
			});
		},
		methods: {
			initMaplayer(url) {
				let newLayer = new MapImageLayer({
					url: url,
					visible: true
				});
				this.seaLevelObject.layers.push(newLayer)
				this.map.add(newLayer);
			}
		}
	});

	var app = new Vue({
		el: '#app'
	});

});
