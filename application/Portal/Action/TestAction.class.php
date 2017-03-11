<?php
class TestAction extends HomeBaseAction{
  //测试
  public function test(){
    
    $obj = M("Approve");
    $rst = $obj-> alias('a') -> join(C('DB_PREFIX').'produce as b on a.mname = b.mname') -> where("b.mid=0")->select();
    dump($rst);

    $this->display(":test");
  }
}
?>
