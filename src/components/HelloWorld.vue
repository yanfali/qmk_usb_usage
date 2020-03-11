<template>
  <ag-grid-vue
    style="width: 100%; height: 70vh;"
    class="ag-theme-balham-dark"
    :columnDefs="columnDefs"
    :rowData="rowData"
  >
  </ag-grid-vue>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import axios from "axios";

export default {
  name: "HelloWorld",
  components: {
    AgGridVue
  },
  data() {
    return {
      columnDefs: [
        { headerName: "Keyboard", field: "keyboard", sortable: true },
        { headerName: "VendorID", field: "vendor_id", sortable: true },
        { headerName: "ProductID", field: "product_id", sortable: true },
        { headerName: "Device ver", field: "device_ver", sortable: true },
        { headerName: "Manu", field: "manufacturer", sortable: true },
        { headerName: "Desc", field: "description", sortable: true }
      ],
      rowData: null
    };
  },
  beforeMount() {
    axios.get("https://api.qmk.fm/v1/usb").then(resp => {
      let rowData = [];
      if (resp.status === 200) {
        rowData = Object.keys(resp.data).reduce((acc, vid) => {
          const byVid = resp.data[vid];
          acc.push(
            Object.keys(byVid).reduce((keebs, pid) => {
              const byPid = byVid[pid];
              keebs.push(
                Object.keys(byPid).reduce((boards, keyboard) => {
                  boards.push(byPid[keyboard]);
                  return boards;
                }, [])
              );
              return keebs;
            }, [])
          );
          return acc;
        }, rowData);
        rowData = rowData.flat(3);
        this.rowData = rowData;
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../../node_modules/ag-grid-community/dist/styles/ag-theme-balham-dark.css";
</style>
