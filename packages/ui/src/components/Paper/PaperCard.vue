<template>
  <div>
    <el-card>
      <h2 class="title">CALL FOR ABSTRACTS</h2>
      <div class="mx-auto">
        <ul>
          <li><h2>Call for abstracts and participations</h2></li>
          <ul>
            <li>
              This workshop is a good venue to discuss and explore the transformative impact of AI
              in the area of education. We invite researchers, educators, and practitioners with
              interests in this area to share their work and opinions. We welcome any work that
              studies or discusses using advanced AI technology to reshape or improve current
              educational practice, such as using AI to create instructional contents, to provide
              students with learning assistance, to personalize their learning experiences, to trace
              their learning process, to build effective learning systems, and any other topics
              related. While no submission is required for participating in this workshop, we do
              accept abstracts that are 1-2 pages in length.
            </li>
          </ul>
        </ul>

        <ul>
          <li><h2>Topics of interest</h2></li>
          <ul>
            <li>Applications of generative AI in educational settings</li>
            <li>AI-assisted generation and evaluation of instructional contents</li>
            <li>Ethical considerations with using generative AI as a learning tool</li>
            <li>Developing generative AI-based learning assistants</li>
            <li>Fostering creativity with generative AI</li>
            <li>AI-driven personalized learning</li>
            <li>AI in curriculum design and assessment</li>
            <li>Teacher-AI collaborations</li>
            <li>AI in special education</li>
            <li>Future skills and AI</li>
            <li>Innovative AI research in education</li>
            <li>Case studies and success stories</li>
          </ul>
        </ul>

        <ul>
          <li><h2>Important Dates</h2></li>
          <ul>
            <li><strong>Abstract Submission Deadline:</strong> {{ d.abstractDeadline }}</li>
            <li><strong>Acceptance Notification:</strong> {{ d.acceptance }}</li>
            <li><strong>Camera ready deadline:</strong> {{ d.cameraReady }}</li>
            <li><strong>Workshop Date:</strong> {{ d.workshop }}</li>
          </ul>
        </ul>

        <div class="row">
          <div class="col-xl-6">
            <ul>
              <li><h2>Formatting, Submission, and Review</h2></li>
              <ul>
                <li>
                  The submission should be formatted in
                  <a
                    target="_blank"
                    href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
                    style="color: #004076"
                    >Springer's Lecture Notes in Artificial Intelligence (LNAI) camera-ready style
                    template</a
                  >. Latex or Word template can be downloaded following the link
                  <a
                    target="_blank"
                    href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
                    style="color: #004076"
                    >https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines</a
                  >.
                </li>
                <br />
                <li>
                  The 1-2 pages abstract should include a title of the contribution, authors' name
                  and affiliation, as well as a brief description of the work to present. Submissions
                  should be sent as an email attachment to
                  <span style="color: #004076">{{ siteConfig.email }}</span>.
                </li>
                <br />
                <li>
                  Submissions will be reviewed by our committee members to determine relevance to
                  our workshop. Accepted submissions will be invited to give a talk.
                </li>
              </ul>
              <li><h2>Target Audience</h2></li>
              <ul>
                <li>Researchers with interests in AI and education</li>
                <li>Software developers and entrepreneurs interested in instructional systems</li>
                <li>Policy makers and educational leaders</li>
                <li>Teachers and educators from various educational levels</li>
                <li>Students with interests in the intersection of AI and education</li>
              </ul>
            </ul>
          </div>

          <div class="col-xl-6">
            <ul>
              <li><h2>Participation</h2></li>
              <ul>
                <li>
                  This workshop will be conducted in in-person mode, where online participation is
                  not available.
                </li>
                <br />
                <li>
                  Authors of accepted abstracts and participants should register for our workshop
                  through the
                  <a :href="siteConfig.attendingUrl" target="_blank" style="color: #004076"
                    >main conference registration</a
                  >
                  window. Make sure to complete your registration before the deadline.
                </li>
              </ul>
            </ul>
            <ul>
              <li><h2>Contact</h2></li>
              <ul>
                <li>
                  If you have any questions or queries on IWEAI {{ siteConfig.year }}, please
                  contact us by email at:
                  <span style="color: #004076">{{ siteConfig.email }}</span>.
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { SITE_CONFIG_KEY } from '../../injection-keys'

const siteConfig = inject(SITE_CONFIG_KEY)!
const d = siteConfig.importantDates
</script>

<style lang="less" scoped>
.title {
  padding-bottom: 10px;
  border-bottom: 1px solid #04162c;
  text-align: center;
}
h2,
p {
  text-align: left;
}
ul {
  list-style-type: none;
  text-align: left;
  padding-inline-start: 0;
}
</style>
