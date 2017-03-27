import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skill',
  templateUrl: './my-skill.component.html',
  styleUrls: ['./my-skill.component.css']
})
export class MySkillComponent {
  title = '请输入你的拥有的技能:';
  skills = ['JAVA', 'PHP'];
  /**
   * 增加技能的方法
   * @param newSkill
   */
  addSkill(newSkill: string) {
    if (newSkill) {
      this.skills.push(newSkill);
    }
  }
}
