<template>
  <div>
    <h2>QMK USB VID/PID Usage</h2>
    <div class="top-bar">
      <div class="left-top">
        <input
          class="input-filter"
          type="text"
          v-model="filter"
          placeholder="filter on content"
        />
      </div>
      <div class="right-top">
        {{ this._rowData.length }} keyboards, {{ this.vids.length }} VIDs,
        {{ this.pids.length }} PIDs
      </div>
    </div>
    <ag-grid-vue
      style="width: 100vw; height: 100vh;"
      class="ag-theme-balham-dark"
      :columnDefs="columnDefs"
      :defaultColDef="defaultColDef"
      :rowData="_rowData"
      :sizeColumnsToFit="true"
    >
    </ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import axios from "axios";
import Fuse from "fuse.js";

export default {
  name: "HelloWorld",
  components: {
    AgGridVue
  },
  data() {
    return {
      defaultColDef: {
        sortable: true,
        resizable: true
      },
      columnDefs: [
        {
          headerName: "Keyboard",
          field: "keyboard"
        },
        {
          headerName: "VendorID",
          field: "vendor_id"
        },
        {
          headerName: "ProductID",
          field: "product_id"
        },
        {
          headerName: "Device ver",
          field: "device_ver"
        },
        {
          headerName: "Manu",
          field: "manufacturer"
        },
        {
          headerName: "Desc",
          field: "description"
        }
      ],
      rowData: [],
      vids: [],
      pids: [],
      filter: "",
      fuse: undefined
    };
  },
  computed: {
    _rowData() {
      if (this.filter === "") {
        return this.rowData;
      } else {
        return this.fuse.search(this.filter).map(r => r.item);
      }
    }
  },
  beforeMount() {
    axios.get("https://api.qmk.fm/v1/usb").then(resp => {
      let rowData = [];
      if (resp.status === 200) {
        rowData = Object.keys(resp.data).reduce((acc, vid) => {
          const byVid = resp.data[vid];
          this.vids.push(vid);
          acc.push(
            Object.keys(byVid).reduce((keebs, pid) => {
              const byPid = byVid[pid];
              this.pids.push(pid);
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
        this.fuse = new Fuse(rowData, {
          keys: [
            "keyboard",
            "vendor_id",
            "product_id",
            "device_ver",
            "description",
            "manufacturer"
          ],
          minMatchCharLength: 3,
          distance: 30,
          threshold: 0.4
        });
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../../node_modules/ag-grid-community/dist/styles/ag-theme-balham-dark.css";
.top-bar {
  display: grid;
  grid-template: 1fr / 1fr 1fr;
}
.left-top {
  text-align: left;
  width: 100%;
}
.right-top {
  text-align: right;
  width: 100%;
}
.input-filter {
  width: 80%;
}
</style>
