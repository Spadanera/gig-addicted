<template>
  <v-container class="max-height">
    <v-row>
      <v-col>
        <BandCard
          :band="band"
          :inBand="true"
          :memberInfo="memberInfo"
          @edit="dialogBand = true"
        />
      </v-col>
      <v-col style="padding-bottom: 30px;">
        <v-card>
          <v-card-title class="headline">{{$ml.get('bandMembers')}}</v-card-title>
          <v-list two-line :threeLine="memberInfo.isAdmin">
            <template v-for="(bandMember, index) in band.bandMembers">
              <v-divider :key="index" inset></v-divider>

              <v-list-item :key="bandMember._id">
                <v-list-item-avatar>
                  <v-img :src="bandMember.userPicture"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title
                    v-html="
                      bandMember.userDisplayName || bandMember.userEmailAddress
                    "
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="bandMember.role"
                  ></v-list-item-subtitle>
                  <v-list-item-content v-if="memberInfo.isAdmin">
                    <div>
                      <v-chip class="ma-1" v-if="bandMember.isAdmin" small>
                        {{$ml.get('admin')}}
                      </v-chip>
                      <v-chip
                        class="ma-1"
                        v-if="bandMember.isAdmin || bandMember.canEditInfo"
                        small
                      >
                        {{$ml.get('editInfo')}}
                      </v-chip>
                      <v-chip
                        class="ma-1"
                        v-if="bandMember.isAdmin || bandMember.canEditSetlist"
                        small
                      >
                        {{$ml.get('editSetlists')}}
                      </v-chip>
                      <v-chip
                        class="ma-1"
                        v-if="bandMember.isAdmin || bandMember.canEditEvents"
                        small
                      >
                        {{$ml.get('editEvents')}}
                      </v-chip>
                      <v-chip
                        class="ma-1"
                        v-if="bandMember.isAdmin || bandMember.canEditMembers"
                        small
                      >
                        {{$ml.get('editMembers')}}
                      </v-chip>
                    </div>
                  </v-list-item-content>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon @click="confirmDeleteBandMember(bandMember._id)"
                    ><v-icon
                      v-if="
                        memberInfo.isAdmin && memberInfo._id !== bandMember._id
                      "
                      >delete</v-icon
                    ></v-btn
                  >
                </v-list-item-action>
                <v-list-item-action>
                  <v-btn icon @click="editMember(bandMember)"
                    ><v-icon
                      v-if="
                        memberInfo.isAdmin || memberInfo._id === bandMember._id
                      "
                      >edit</v-icon
                    ></v-btn
                  >
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-list>
          <v-card-text style="padding: 0; position: relative">
            <v-btn
              absolute
              dark
              small
              fab
              top
              right
              color="primary"
              @click="dialogInvitation = true"
              v-if="memberInfo.isAdmin"
            >
              <v-icon> add </v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="snackbar.enabled"
      :bottom="true"
      :left="false"
      :multi-line="false"
      :right="false"
      :timeout="3000"
      :vertical="false"
    >
      {{ snackbar.text }}
      <v-btn text @click="snackbar.enabled = false">{{$ml.get('close')}}</v-btn>
    </v-snackbar>
    <BandForm
      :dialog="dialogBand"
      :band="band"
      @close="dialogBand = false"
      @submitted="reload"
      :memberInfo="memberInfo"
    />
    <MemberInvitation
      :dialog="dialogInvitation"
      :bandId="this.band._id"
      :memberInfo="memberInfo"
      @close="dialogInvitation = false"
      @submitted="sumbmittedInvitation"
    />
    <MemberForm
      :bandId="band._id"
      @reload="reload"
      :bandMember="editBandMember"
      ref="memberform"
      :dialog="dialogMember"
      @close="dialogMember = false"
      :memberInfo="memberInfo"
    />
    <Confirm
      :dialog="dialogConfirm"
      @confirm="deleteBandMember"
      :title="modalTitle"
      :text="modalText"
      @close="dialogConfirm = false"
    />
  </v-container>
</template>

<script>
import BandCard from "./BandCard.vue";
import BandForm from "./BandForm.vue";
import MemberInvitation from "./MemberInvitation.vue";
import MemberForm from "./MemberForm.vue";
import Confirm from "../layout/Confirm.vue";

export default {
  name: "GeneralInfo",
  data() {
    return {
      dialogBand: false,
      dialogInvitation: false,
      dialogMember: false,
      dialogConfirm: false,
      snackbar: {
        enebled: false,
        text: "",
      },
      modalTitle: "",
      modalText: "",
      editBandMember: {},
      memberToDeleteId: "",
    };
  },
  components: {
    BandCard,
    BandForm,
    MemberInvitation,
    MemberForm,
    Confirm,
  },
  props: {
    band: Object,
    memberInfo: Object,
  },
  methods: {
    async deleteBandMember() {
        let band = await this.Service.bandService.deleteBandMember(this.memberToDeleteId);
        this.$emit("reload", band);
    },
    confirmDeleteBandMember(bandMemberId) {
      this.modalTitle = this.$ml.get('areYouSure');
      this.modalText = this.$ml.get('allMembersRemoved');
      this.dialogConfirm = true;
      this.memberToDeleteId = bandMemberId;
    },
    sumbmittedInvitation(message) {
      this.dialogInvitation = false;
      this.snackbar = {
        enebled: true,
        text: message,
      };
      this.$emit("reload");
    },
    editMember(bandMember) {
      this.editBandMember = bandMember;
      let that = this;
      window.setTimeout(function () {
        that.$refs.memberform.reload();
        that.dialogMember = true;
      }, 100);
    },
    reload(band) {
      this.$emit("reload", band);
    },
  },
};
</script>

<style>
</style>