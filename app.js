require([
	"esri/Map",
	"esri/views/MapView",
	"esri/views/SceneView",
	"esri/layers/MapImageLayer"
], function (Map, MapView, SceneView, MapImageLayer) {

	Vue.component('map-component', {
		template: 
		`<div id="wrapper">
			<div id="map"></div>
			<div class="slider">
        <output class="flex-item" for="sliderWithValue">SLR: {{ SLRVal }} ft</output>
        <input v-model="SLRVal" step="1" min="0" max="10" value="0" type="range">
      </div>
    </div>`,
		data: function () {
			return {
				SLRVal: 0,
				seaLevelObject: {
					lastVis: 0,
					layers: []
				}
			}
		},
		watch: {
	    SLRVal: function(newVal) {
        this.SLRVal = newVal
        this.seaLevelObject.layers[newVal].visible = true;
        this.seaLevelObject.layers[this.seaLevelObject.lastVis].visible = false;
        this.seaLevelObject.lastVis = newVal;
	    }
	  },
		mounted() {
			var map = new Map({
				basemap: "dark-gray-vector"
			});

			// // 3D view but slider performance suffers
			// var view = new SceneView({
			// 	container: "map",
			// 	map: map,
			// 	center: [-122.338556, 48.424270],
			// 	zoom: 12
			// });

			var view = new MapView({
        map: map,
        container: 'map',
        center: [-122.438556, 48.424270],
        zoom: 11
      });

			// Sea Level layers direct from NOAA
			const slr0 = new MapImageLayer({
				url: "https://coast.noaa.gov/arcgis/rest/services/dc_slr/slr_0ft/MapServer",
				visible: true
			});
			this.seaLevelObject.layers.push(slr0)
			map.add(slr0);

			const slr1 = new MapImageLayer({
				url: "https://coast.noaa.gov/arcgis/rest/services/dc_slr/slr_1ft/MapServer",
				visible: false
			});
			this.seaLevelObject.layers.push(slr1)
			map.add(slr1);

			const slr2 = new MapImageLayer({
				url: "https://coast.noaa.gov/arcgis/rest/services/dc_slr/slr_2ft/MapServer",
				visible: false
			});
			this.seaLevelObject.layers.push(slr2)
			map.add(slr2);

			const slr3 = new MapImageLayer({
				url: "https://coast.noaa.gov/arcgis/rest/services/dc_slr/slr_3ft/MapServer",
				visible: false
			});
			this.seaLevelObject.layers.push(slr3)
			map.add(slr3);

			const slr4 = new MapImageLayer({
				url: "https://coast.noaa.gov/arcgis/rest/services/dc_slr/slr_4ft/MapServer",
				visible: false
			});
			this.seaLevelObject.layers.push(slr4)
			map.add(slr4);

			const slr5 = new MapImageLayer({
				url: "https://coast.noaa.gov/arcgis/rest/services/dc_slr/slr_5ft/MapServer",
				visible: false
			});
			this.seaLevelObject.layers.push(slr5)
			map.add(slr5);

			const slr6 = new MapImageLayer({
				url: "https://coast.noaa.gov/arcgis/rest/services/dc_slr/slr_6ft/MapServer",
				visible: false
			});
			this.seaLevelObject.layers.push(slr6)
			map.add(slr6);

			const slr7 = new MapImageLayer({
				url: "https://coast.noaa.gov/arcgis/rest/services/dc_slr/slr_7ft/MapServer",
				visible: false
			});
			this.seaLevelObject.layers.push(slr7)
			map.add(slr7);

			const slr8 = new MapImageLayer({
				url: "https://coast.noaa.gov/arcgis/rest/services/dc_slr/slr_8ft/MapServer",
				visible: false
			});
			this.seaLevelObject.layers.push(slr8)
			map.add(slr8);

			const slr9 = new MapImageLayer({
				url: "https://coast.noaa.gov/arcgis/rest/services/dc_slr/slr_9ft/MapServer",
				visible: false
			});
			this.seaLevelObject.layers.push(slr9)
			map.add(slr9);

			const slr10 = new MapImageLayer({
				url: "https://coast.noaa.gov/arcgis/rest/services/dc_slr/slr_10ft/MapServer",
				visible: false
			});
			this.seaLevelObject.layers.push(slr10)
			map.add(slr10);

		}
	});

	var app = new Vue({
		el: '#app'
	});

});
