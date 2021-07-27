<template>
  <div id="app">
    <div class="flex pb-5">
      <label class="pr-10 pt-2">Tiêu đề bài viết</label>
      <b-form-input v-model="tieuDe" type="text"></b-form-input>
    </div>
    <div class="flex pb-5">
      <label class="pr-10 pt-2">Chủ đề bài viết</label>
      <b-form-input v-model="chuDe" type="text"></b-form-input>
    </div>
    <ckeditor
      class="pb-5"
      tag-name="textarea"
      v-model="editorData"
      :config="editorConfig"
      :editor-url="editorUrl"
    >
    </ckeditor>

    <a
      @click="handleSave()"
      class="btn btn-light-success font-weight-bolder font-size-sm"
      >Tạo bài viết</a
    >
  </div>
</template>

<script>
import CKEditor from "ckeditor4-vue";
//import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "app",
  components: {
    // Use the <ckeditor> component in this view.
    ckeditor: CKEditor.component,
  },
 computed: {
    ...mapState({
      stringSearch: (state) => state.storeqlda.stringSearch, // rieng doi voi map state thi phai dùng như này để  lấy state
    }),
    ...mapGetters([
      "storeqlda/arrDmSearchContribute",
      "storeqlda/currentUser",
      "currentUserPersonalInfo",
    ]),
    dataArrDmSearch() {
      return this["storeqlda/arrDmSearchContribute"];
    },
  },
  data() {
    return {
      tieuDe: "",
      chuDe: "",
      editorData: "",
      editorUrl: "https://cdn.ckeditor.com/4.14.1/full-all/ckeditor.js",
      editorConfig: {
        // plugins: [

        //     ],
        toolbarGroups: [
          { name: "document", groups: ["mode", "document", "doctools"] },
          { name: "clipboard", groups: ["clipboard", "undo"] },
          {
            name: "editing",
            groups: ["find", "selection", "spellchecker", "editing"],
          },
          { name: "forms", groups: ["forms"] },
          { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
          {
            name: "paragraph",
            groups: ["list", "indent", "blocks", "align", "bidi", "paragraph"],
          },
          { name: "links", groups: ["links"] },
          { name: "insert", groups: ["insert"] },
          { name: "styles", groups: ["styles"] },
          { name: "colors", groups: ["colors"] },
          { name: "tools", groups: ["tools"] },
          { name: "others", groups: ["others"] },
          { name: "about", groups: ["about"] },
        ],
        //removeButtons: 'NewPage,Print,Save,Templates,Replace,Find,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,CreateDiv,Anchor,Flash,Smiley,PageBreak,ShowBlocks,About,Language,Iframe,Image'
      },
    };
  },
  methods: {
       ...mapActions([
      "storeqlda/ActionCreateArticle", //action nay goi den api co pagination
    
    ]),
    handleSave() {
    var idUser = this["storeqlda/currentUser"].id;
     var data = {
          chuDe: this.chuDe,
          tieuDe: this.tieuDe,
          editorData: this.editorData,
          idUser:idUser
        };
    this['storeqlda/ActionCreateArticle'](data).then((res)=> {
        alert(res.data)
    });
    },
  },
};
</script>

<style>
</style>